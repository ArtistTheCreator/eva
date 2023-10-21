import type { FC } from 'react';

import * as Ant from 'antd';

const Error: FC<{ onRestart: () => void }> = (props) => {
    return (
        <Ant.Result 
            status='error'
            title="Failed"
            subTitle="Количетво ошибок больше допустимого значения."
            extra={(
                <Ant.Button
                    type="primary"
                    onClick={props.onRestart}
                    danger
                >
                    Попробоавть снова
                </Ant.Button>
            )}
        />
    );
};

export default Error;
