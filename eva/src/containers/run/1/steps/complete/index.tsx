import type { FC } from 'react';

import * as utils from '@root/utils/app';

import * as Ant from 'antd';
// import * as Icons from '@ant-design/icons';
import * as Router from 'react-router-dom';
import * as React from 'react';


const ShareForm: FC<{ msg: string }> = (props) => {
    const [form] = Ant.Form.useForm();

    React.useEffect(() => {
        form.setFieldValue('message', props.msg);
    }, [props])

    return (
        <Ant.Form
            layout='vertical'
            form={form}
            style={{
                marginTop: 24
            }}
        >
            <Ant.Form.Item name="name" label="Имя" rules={[{ required: true }]}>
                <Ant.Input />
            </Ant.Form.Item>
            <Ant.Form.Item name="email" label="Email">
                <Ant.Input />
            </Ant.Form.Item>
            <Ant.Form.Item name="message">
                <Ant.Input.TextArea 
                    disabled
                    rows={7}
                />
            </Ant.Form.Item>
            <Ant.Form.Item>
                <Ant.Button
                    type="primary"
                    style={{ width: '100%' }}
                >
                    Поделиться
                </Ant.Button>
            </Ant.Form.Item>
        </Ant.Form>
    )
};

const Complete: FC<{
    right: number,
    error: number,
    time: number,
    onRestart: () => void
}> = (props) => {
    const { token } = Ant.theme.useToken();
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Ant.Descriptions column={1} bordered title="Результат" labelStyle={{ width: '30%' }}>
                <Ant.Descriptions.Item label="Верно">
                    {props.right}
                </Ant.Descriptions.Item>
                <Ant.Descriptions.Item label="Неверно">
                    {props.error}
                </Ant.Descriptions.Item>
                <Ant.Descriptions.Item label="Время выполнения (секунды)">
                    {props.time}
                </Ant.Descriptions.Item>
                <Ant.Descriptions.Item label="Среднее время (1 шаг)">
                    -
                </Ant.Descriptions.Item>
                <Ant.Descriptions.Item label="Лучшее время (1 шаг)">
                    -
                </Ant.Descriptions.Item>
                <Ant.Descriptions.Item label="Худшее время (1 шаг)">
                    -
                </Ant.Descriptions.Item>
            </Ant.Descriptions>
            <div
                style={{
                    marginTop: token.marginMD,
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Ant.Space>
                    <Router.Link to={utils.appLink('')}>
                        <Ant.Button>
                            Вернутся к списку тестов
                        </Ant.Button>
                    </Router.Link>
                    <Ant.Button onClick={props.onRestart}>
                        Пройти заново
                    </Ant.Button>
                    <Ant.Button type="primary" onClick={() => setOpen(true)}>
                        Поделиться результатом
                    </Ant.Button>
                </Ant.Space>
            </div>
            <Ant.Modal
                title="Поделиться результатом"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                width={800}
            >
                <ShareForm 
                    msg={
                        `Верно: ${props.right}\n` + 
                        `Неверно: ${props.error}\n` +
                        `Время выполнения (секунды): ${props.time}\n` +
                        `Среднее время (1 шаг): -\n` +
                        `Лучшее время (1 шаг): -\n` +
                        `Худшее время (1 шаг): -`
                }
                />
            </Ant.Modal>
        </div>
    );
};

export default Complete;
