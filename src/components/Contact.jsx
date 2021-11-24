import {useState} from 'react';
import { useForm } from "react-hook-form";
import Snackbar from '@material-ui/core/Snackbar';
import useTranslation from 'next-translate/useTranslation';
import MuiAlert from '@material-ui/lab/Alert';
import {LoadingSpinner} from '../styles/loaderStyles';
import {Title, Input, Button, ContactSection, Inputs, Labels, TextInput, ErrorMessage, ContactInfo} from '../styles/contactStyles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Contact = props => {
    const { t } = useTranslation('common');
    const [snackBar, setSnackBar] = useState({open: false, status: null});
    const { register, handleSubmit, errors, reset } = useForm();
    
    const onSubmit = async formData => {
        setSnackBar({...snackBar, status: 'loading'});
        const res = await fetch('/api/email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const {status} = await res.json();
        if(status){
            setSnackBar({open: true, status: 'success'});
        }
        else{
            setSnackBar({open: true, status: 'failed'});
        }
    };

    const closeSnackbar = () => {
        if(snackBar.status === 'success') reset();
        setSnackBar({...snackBar, open: false});
    }

    const errorMessages = {
        required: t('RequierdField'),
        pattern: t('InvaliEmail')
    }
    
    return(
        <ContactSection>
            <Title>{t('ContactMe')}</Title>
            <Inputs onSubmit={handleSubmit(onSubmit)}>
                <Input error={errors.name}>
                    <Labels>
                        {t('Name')}
                        <ErrorMessage>{errors.name && errorMessages[errors.name.type]}</ErrorMessage>
                    </Labels>
                    <input name="name" id="name" type="text" ref={register({ required: true })} />
                </Input>
                <Input error={errors.email}>
                    <Labels>
                        Email
                        <ErrorMessage>{errors.email && errorMessages[errors.email.type]}</ErrorMessage>
                    </Labels>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        }
                      })}/>
                </Input>
                <Labels>
                    {t('Message')}
                    <ErrorMessage>{errors.text && errorMessages[errors.text.type]}</ErrorMessage>
                </Labels>
                <TextInput error={errors.text} name="text" ref={register({ required: true })} />
                <Button> {snackBar.status === 'loading' ? <LoadingSpinner/> : t('Send')} </Button>
            </Inputs>
            <ContactInfo>contact@adamblicharz.com</ContactInfo>
            <Snackbar open={snackBar.open} autoHideDuration={5000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} severity={snackBar.status === 'success' ? 'success' : 'error'}>
                    {
                        snackBar.status === 'success'
                        ?   t('SendSuccess')
                        :   t('SendError')
                    }
                </Alert>
            </Snackbar>
        </ContactSection>
    )
}

export default Contact;