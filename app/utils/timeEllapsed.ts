export const timeElapsed = (dateString: string | Date): string => {
    const date = new Date(dateString);
    const now = new Date();

    const diffInMs = now.getTime() - date.getTime();

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return 'agora mesmo';
    } else if (minutes < 60) {
        return `há ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
    } else if (hours < 24) {
        return `há ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
    } else if (days < 30) {
        return `há ${days} ${days === 1 ? 'dia' : 'dias'}`;
    } else if (months < 12) {
        return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
    } else {
        return `há ${years} ${years === 1 ? 'ano' : 'anos'}`;
    }
};
