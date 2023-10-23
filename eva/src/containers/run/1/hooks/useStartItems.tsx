import { useState, useEffect } from 'react';
import { useImages } from './useImages';

function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export const useStartItems = (picked: number[], error: number) => {
    const images = useImages();
    console.log({ images })
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        if (!picked.length) {
            setItems(
                Array.from(
                    Array(9),
                    () => {
                        let randomIndex = Math.floor(Math.random() * images.length);
                        return images[randomIndex] || 1
                    }
                )
            );
            return;
        };

        // Picked > 0
        let pickedIndex = Math.floor(Math.random() * picked.length);
        let pickedItem = picked[pickedIndex] || -1;

        let unPickedItems = images.filter((item) => !picked.includes(item));
        let unPickedIndex = Math.floor(Math.random() * unPickedItems.length);
        let unPickedItem = unPickedItems[unPickedIndex] || -1;

        let randomItems = Array.from(
            Array(7),
            () => {
                let randomIndex = Math.floor(Math.random() * images.length);
                return images[randomIndex] || 1
            }
        );

        let newItems = [
            ...randomItems,
            unPickedItem,
            pickedItem
        ].filter((item) => item > -1);

        shuffle(newItems);
        setItems(newItems);

    }, [picked, error])

    return items;
};
