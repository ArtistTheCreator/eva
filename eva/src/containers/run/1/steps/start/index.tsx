import type { FC } from 'react';

import * as utils from '@root/utils/app';

import * as Ant from 'antd';


const TestStart: FC<{ items: number[]; onPick: (item: number) => void }> = (props) => {
    // const { token } = Ant.theme.useToken();

    return (
        <div
            style={{
                height: 'calc(100vh - 120px)',
            }}
        >
            <Ant.Row style={{ height: '100%' }} gutter={[4, 4]}>
                {/* <Ant.Col span={24}>
                    <Ant.Space>
                        <Ant.Button size='small'>
                            Cancel
                        </Ant.Button>
                    </Ant.Space>
                </Ant.Col> */}
                <Ant.Col span={24}>
                    <div
                        style={{
                            height: 'calc(100vh - 220px)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Ant.Row gutter={[4, 4]} style={{ width: 624 }}>
                            {props.items.map((item, index) => {
                                if (item < 0) 
                                    return (
                                        <Ant.Col 
                                            key={`item.${index}`}
                                            span={4} 
                                            style={{ height: 96 }}
                                        />
                                    );
                                
                                return (
                                    <Ant.Col 
                                        key={`item.${index}`}
                                        span={4} 
                                        style={{ height: 100 }}
                                    >
                                        <div
                                            style={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => {
                                                props.onPick(item)
                                            }}
                                        >
                                            <img 
                                                src={utils.appLink(`/interference/${item}.bmp`)}
                                                height="100px"
                                                width="100px"
                                            />
                                        </div>
                                    </Ant.Col>
                                )
                            })}
                        </Ant.Row>
                    </div>
                </Ant.Col>
            </Ant.Row>
        </div>
    );
};

export default TestStart;
