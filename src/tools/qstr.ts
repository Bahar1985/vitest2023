/**
 * capitalizeFirstLetter()
 * capitalizeFirstLetter('this is a test)
 *  
 * "this is a test"
 */

export const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
}