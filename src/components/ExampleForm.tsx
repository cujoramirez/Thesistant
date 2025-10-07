import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { userAtom } from '../stores/atoms';

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

type FormData = z.infer<typeof formSchema>;

const ExampleForm = () => {
  const [success, setSuccess] = useState(false);
  const setUser = useSetAtom(userAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setUser(data);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <Typography variant="h5" className="mb-4">
        Example Form with React Hook Form + Zod
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="space-y-4">
          <TextField
            {...register('name')}
            label="Name"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            {...register('email')}
            label="Email"
            type="email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <Button type="submit" variant="contained" fullWidth size="large">
            Submit
          </Button>

          {success && (
            <Alert severity="success">
              Form submitted successfully! User data saved to Jotai store.
            </Alert>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default ExampleForm;
