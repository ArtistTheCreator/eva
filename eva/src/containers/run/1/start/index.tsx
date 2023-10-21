import type { FC } from 'react';

import * as utils from '@root/utils/app';
import * as react from 'react';

import * as Ant from 'antd';


const items = Array.from(Array(60), (_, index) => index + 1);


const TestStart: FC<{
    // onError: (errorCount: number, pickedCount: number) => void;
    // onSuccess: () => void;
    picked: number[];
    setPicked: (data: number[]) => void;
    error: number;
    setError: (data: number) => void;
}> = (props) => {
    const { 
        picked, setPicked,
        error, setError 
    } = props;
    // const [picked, setPicked] = react.useState<number[]>([]);
    // const [error, setError] = react.useState(0);
    const [curr, setCurr] = react.useState<number[]>(
        Array.from(
            Array(9),
            () => {
                const randomIndex = Math.floor(Math.random() * items.length);
                return items[randomIndex] as number
            }
        )
    );

    const onClick = (item: number) => {
        if (picked.includes(item)) {
            Ant.notification.error({
                message: 'Alreay picked.'
            });
            setError(error + 1);
        }
        else {
            setPicked([...picked, item]);
        }
    };

    react.useEffect(() => {
        if (picked.length > 0) {
            const pickedIndex = Math.floor(Math.random() * picked.length);
            const pickedItem = picked[pickedIndex] || -1;

            const unPickedItems = items.filter((item) => !picked.includes(item));

            const unPickedIndex = Math.floor(Math.random() * unPickedItems.length);
            const unPickedItem = unPickedItems[unPickedIndex] || -1;

            const randomItems = Array.from(
                Array(pickedItem > -1 ? 7 : 8),
                () => {
                    let randomIndex = Math.floor(Math.random() * items.length);
                    return items[randomIndex] || 1
                }
            );

            setCurr([
                ...randomItems,
                unPickedItem,
                pickedItem
            ].filter((item) => item > -1))
        }
    }, [picked, error]);

    return (
        <div
            style={{
                height: 'calc(100vh - 120px)',
            }}
        >
            <Ant.Row style={{ height: '100%' }} gutter={[4, 4]}>
                {curr.map((item, index) => (
                    <Ant.Col
                        key={`item.${index}`}
                        span={8}
                        style={{
                            height: '33%'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <div
                                style={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => onClick(item)}
                            >
                                <img 
                                    src={utils.appLink(`/interference/${item}.bmp`)}
                                    style={{
                                        // width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}      
                                />
                            </div>
                        </div>
                    </Ant.Col>
                ))}
            </Ant.Row>
        </div>
    );
};

export default TestStart;
