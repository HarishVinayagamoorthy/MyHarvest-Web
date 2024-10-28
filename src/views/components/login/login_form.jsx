import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { LOGO, LOGO_WIDTH_TITLE, VERTACE_LOGO } from '@helpers/image_constant';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@routes/my_routes';
import { useTranslation } from 'react-i18next';
import { dynamic_request, useDynamicSelector } from '@services/redux';
import { useDispatch } from 'react-redux';
import { useAPIRequest } from '@helpers/hooks';

const LoginForm = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const login_results = useDynamicSelector("login")

    let handle_login = useAPIRequest(
        "login",
        null
    );
    const onFinish = (values) => {
        navigate("/admin/product-demand")
        // handle_login(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handle_redirect = () => {
        window.open("https://vertace.com/")
    }
    useEffect(() => {
        if (login_results?.status === "success") {

        }else {
            
        }
    }, [login_results])


    return (
        <div className="login-container">
            <div className="login-left">
                <div className="login-logo">
                    <img src={LOGO_WIDTH_TITLE} alt="MY Harvest" />
                </div>
            </div>
            <div className="login-right">
                {/* <img src={LOGO} alt="MY Harvest" /> */}
                <h2>{t("login")}</h2>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="login-form"
                    layout='vertical'
                >
                    <Form.Item
                        label="Username"
                        name="mobile"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input the password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-button" loading={login_results?.loading || false}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div className='login-footer-container'>
                    <text>
                        {t("powered_by")}
                    </text>
                    <img src={VERTACE_LOGO} className='vertace-logo' onClick={handle_redirect} />
                </div>
            </div>

        </div>
    );
};

export default LoginForm;
