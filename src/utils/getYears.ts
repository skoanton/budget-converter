export const getYears = (startYear:number) :number[] => {
    const currentYear = new Date().getFullYear();
    const years = []
    for (let i = startYear; i <= currentYear; i++) {
        years.push(i);
    }
    years.sort((a,b) => b-a);
    return years;
}