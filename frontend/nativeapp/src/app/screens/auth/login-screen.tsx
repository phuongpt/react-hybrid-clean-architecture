import { Formik } from 'formik';
import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { styled } from 'nativewind';
import { Auth, signInAction, validateAuth } from 'core';
import { useAppDispatch } from '../../hook';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../router/stack-param-list';
import { FormErrors } from '../components/general/form-errors';
import { Link } from '@react-navigation/native';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)
const StyledLink = styled(Link)
const StyledButton = styled(TouchableOpacity)

type Props = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

export default function LoginScreen({ navigation }: Props) {
    const dispatch = useAppDispatch();
    return (

        <StyledView className="h-screen bg-blue-800">
            <StyledView className="p-5 bg-white m-3 mt-40 rounded-lg">
                <StyledText className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-8">
                    Sign in to your account
                </StyledText>
                <Formik
                    initialValues={{ email: "", password: "" } as Auth}
                    validate={(values: Auth) => {
                        const errors = {};

                        const result = validateAuth(values);
                        if (!result.success) {
                            return result.error.formErrors.fieldErrors;
                        }

                        return errors;
                    }}
                    onSubmit={async (values: Auth, { setSubmitting }) => {
                        try {
                            setSubmitting(true);
                            await dispatch(signInAction(values));
                            setSubmitting(false);
                        } catch (error) {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <StyledView className="space-y-4 md:space-y-6">
                            <StyledView className="block mb-2">
                                <StyledText className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</StyledText>
                                <StyledTextInput
                                    id='email'
                                    className="bg-gray-50  border-2 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                            </StyledView>
                            <StyledView className="block mb-2">
                                <StyledText className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</StyledText>
                                <StyledTextInput
                                    id='password'
                                    placeholder="••••••••" className="bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />

                            </StyledView>
                            <StyledView className="flex items-end justify-between">
                                <StyledLink to={"/forgot_password"} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</StyledLink>
                            </StyledView>

                            <StyledButton disabled={isSubmitting} onPress={handleSubmit} className="bg-primary-600 rounded-lg text-sm px-5 py-4  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <StyledText className="font-medium text-white self-center">Sign in</StyledText>
                            </StyledButton>
                            <FormErrors erros={errors} />

                            <StyledView className="text-sm font-light text-gray-500 dark:text-gray-400 flex-row mt-3">
                                <StyledText> Don’t have an account yet?</StyledText>
                                <StyledButton className="font-medium text-primary-600 hover:underline dark:text-primary-500" onPress={() => navigation.push("RegisterScreen")}>
                                    <StyledText className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign up</StyledText>
                                </StyledButton>
                            </StyledView>
                        </StyledView>
                    )}
                </Formik>

            </StyledView>
        </StyledView>
    );
}

