import type { FC } from 'react';
import type { ModalProps } from 'antd';

import * as Ant from 'antd';


const Attempt: FC<{ open: boolean; onOk: () => void}> = (props) => {
    return (
        <Ant.Modal
            title="Неправильный выбор"
            open={props.open}
            okText="Следующая попытка"
            onCancel={() => {}}
            footer={null}
            width={400}
            centered
        >
            <div>
                <Ant.Button
                    type="primary"
                    onClick={props.onOk}
                    style={{
                        width: '100%'
                    }}
                >
                    Следующая попытка
                </Ant.Button>
            </div>
        </Ant.Modal>
    )
};

export default Attempt;
