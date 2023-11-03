import { useState, useEffect } from 'react';
import { useImages } from './useImages';

import { shuffle } from './helpers';
import { sampleSize } from 'lodash';


export const useStepItems = (picked: number[]): number[] => {
    const images = useImages();
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        // First Step
        if (picked.length == 0) {
            const randomItems = sampleSize(images, 3);
            const newItems = randomItems.concat(Array.from(Array(27), () => -1));

            shuffle(newItems);
            setItems(newItems)

            return;
        };

        const unPickedImages = images.filter((item) => !picked.includes(item));
        const unPickedSize = picked.length > 26 ? 29 : 3 + picked.length - 1;

        const pickedItems = sampleSize(picked, 1);
        const unPickedItems = sampleSize(unPickedImages, unPickedSize);
        const zeroItems = Array.from(Array(29 - unPickedSize), () => -1);

        const newItems = pickedItems.concat(unPickedItems).concat(zeroItems);

        shuffle(newItems);
        setItems(newItems);

    }, [picked]);

    return items;
};