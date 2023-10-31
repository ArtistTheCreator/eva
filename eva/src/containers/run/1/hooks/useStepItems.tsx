import { useState, useEffect } from 'react';
import { useImages } from './useImages';

import { shuffle } from './helpers';


export const useStepItems = (picked: number[]): number[] => {
    const images = useImages();
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        const currLen = 3 + picked.length;
        const newLen = picked.length > 0 ? 1 : 0;
        const randomLen = picked.length > 0 ? currLen - 2 : 3;

        let pickedIndex = Math.floor(Math.random() * picked.length);
        let pickedItem = picked[pickedIndex] || -1;

        let unPickedItems = images.filter((item) => !picked.includes(item));
        let unPickedIndex = Math.floor(Math.random() * unPickedItems.length);
        let unPickedItem = newLen > 0 ? unPickedItems[unPickedIndex] || -1 : -1;

        let randomItems = Array.from(
            Array(randomLen),
            () => {
                let randomIndex = Math.floor(Math.random() * images.length);
                return images[randomIndex] || 1
            }
        );

        console.log({ currLen });

        let newItems = [
            ...randomItems,
            unPickedItem,
            pickedItem
        ]
            .filter((item) => item > -1)
            .concat(
                currLen < 30 
                ? Array.from(Array(30 - currLen), () => -1)
                : []
            );

        shuffle(newItems);
        setItems(newItems);

    }, [picked])

    return items;
};