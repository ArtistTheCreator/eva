// Interference Test. (60 images)
import type { FC } from 'react';

import * as hooks from './hooks';

import * as Ant from 'antd';
import * as Icons from '@ant-design/icons';
import Preview from './steps/preview';
import Start from './steps/start';
import Complete from './steps/complete';
// import Error from './steps/error';


const Test1Run: FC = () => {
    // Preload
    const isLoad = hooks.useImagePreload();
    const state = hooks.useTestState();
    const items = hooks.useStartItems(state.picked, state.error);
  

    if (!isLoad) return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 40
            }}
        >
            <Ant.Typography.Text>
                <Icons.LoadingOutlined
                    style={{
                        fontSize: 40
                    }}
                />
            </Ant.Typography.Text>
        </div>
    );

    return (
        <div>
            {state.step === 'init' && <Preview onStart={state.onStart} />}
            {/* {state.step === 'error' && <Error onRestart={() => state.onRestart()} />} */}
            {state.step === 'complete' && (
                <Complete 
                    right={state.picked.length}
                    error={state.error}
                    time={state.time}
                    onRestart={state.onRestart}
                />
            )}
            {state.step === 'start' && (
                <Start 
                    items={items}
                    onPick={(item: number) => {
                        if (state.picked.includes(item))
                            state.setError(state.error + 1)
                        else
                            state.setPicked([
                                ...state.picked,
                                item
                            ])
                    }}
                />
            )}
        </div>
    );
};

export default Test1Run;