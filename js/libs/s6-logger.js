const logCopy = console.log.bind(console); // <- Bind to the original console.log() method

export default console.log = (data) => {
    const now = new Date();
    const date = (false) ? now.toLocaleDateString() : '';
    const time = now.toLocaleTimeString();
    const timestamp = `[${date}${time}]`;
    logCopy(`%c${timestamp}%c`, 'color: cyan; font-weight: bold;', '', data);
}