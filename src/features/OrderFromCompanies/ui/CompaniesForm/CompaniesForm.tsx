import { useForm } from 'react-hook-form';
import cls from './CompaniesForm.module.scss';
import { Button, TextField } from '@mui/material';
import { Title } from 'shared/ui/Title/Title';

interface CompaniesFormData {
    name: string;
    phoneNumber: number;
}

export const CompaniesForm = () => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm<CompaniesFormData>()

    const onSubmit = (data: CompaniesFormData) => {
        console.log(data)
    }

    return (
        <form
            className={cls.CompaniesForm}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Title title='Оставить заявку'/>
            <TextField
                fullWidth
                error={!!errors.phoneNumber}
                id="outlined-basic"
                label="Ваше имя"
                variant="outlined"
                helperText={errors.name?.message}
                {...register('name', {
                    required: 'Поле обязательно'
                })}
            />
            <TextField
                error={!!errors.phoneNumber}
                id="outlined-basic"
                label="Номер телефона"
                variant="outlined"
                helperText={errors.phoneNumber?.message}
                type='number'
                {...register('phoneNumber', {
                    required: 'Поле обязательно'
                })}
            />
            <Button
                type='submit'
                variant="contained"
                size='medium'
                color='primary'
            >
                Отправить заявку
            </Button>
        </form>
    );
}