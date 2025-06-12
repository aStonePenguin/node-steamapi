// Uses global fetch if available, otherwise uses node-fetch, allows for support for modern node and serverless environmentsexport 
export const fetchImpl = typeof fetch !== 'undefined' ? fetch : (await import('node-fetch')).default;
