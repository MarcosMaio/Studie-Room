export default function timeToSeconds(time: string) {
    const [hours = '0', minutes = '0' , seconds = '0'] = time.split(':');


    const hoursinSeconds = Number(hours) * 3600;
    const minutesinSeconds = Number(minutes) * 60;
    return hoursinSeconds + minutesinSeconds + Number(seconds);
}
