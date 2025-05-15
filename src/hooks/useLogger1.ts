import { useEffect, useCallback } from "react";

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LoggerConfig {
    level?: LogLevel;
    enable?: boolean;
}

const LOG_LEVELS: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
}

const useLogger1 = (componentName: string, config?: LoggerConfig) => {
    const {
        level = 'info',
        enable = process.env.NODE_ENV === 'development',
    } = config || {};

    const shouldLog = useCallback((targetLevel: LogLevel) => {
        return LOG_LEVELS[targetLevel] >= LOG_LEVELS[level]
    }, [level]);

    const log = useCallback((type: LogLevel, message: string, data?: any) => {
        if (!enable || !shouldLog(type)) return;

        const logMessage = `[${componentName}]${message}`;
        switch (type) {
            case 'error':
                console.error(logMessage, data);
                break;
            case 'warn':
                console.warn(logMessage, data);
                break;
            case 'info':
                console.info(logMessage, data);
                break;
            default:
                console.log(logMessage, data);

        }
    }, [enable, componentName, shouldLog]);

    return {
        debug: (message: string, data?: any) => log('debug', message, data),
        info: (message: string, data?: any) => log('info', message, data),
        warn: (message: string, data?: any) => log('warn', message, data),
        error: (message: string, error?: Error) => log('error', message, error)
    };
}

export default useLogger1;
