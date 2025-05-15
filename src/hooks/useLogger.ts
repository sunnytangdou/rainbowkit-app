import { useCallback } from "react";

const useLogger = () => {
    const log = useCallback((msg: string) => {
        console.log(`[Log]${msg}`);
        alert(`[Log]${msg}`);
    }, []);

    const warn = useCallback((msg: string) => {
        console.warn(`[Warn]${msg}`);
        alert(`[Warn]${msg}`);
    }, []);

    const error = useCallback((msg: string) => {
        console.error(`[Error]${msg}`);
        alert(`[Error]${msg}`);
    }, []);

    return { log, warn, error };
}

export default useLogger;