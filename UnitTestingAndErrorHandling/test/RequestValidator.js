function solve(obj){
    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)){
        throw  new Error('Invalid request header: Invalid Method')
    }

    if (!obj.uri ||!(obj.uri.match(/^([*]|[A-Za-z0-9.]+)$/g))){
        throw  new Error('Invalid request header: Invalid URI')
    }

    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(obj.version)){
        throw  new Error('Invalid request header: Invalid Version')
    }

    if (obj.message === undefined){
        throw new Error('Invalid request header: Invalid Message')
    }

    if (obj.message.includes('<') ||obj.message.includes('>')|| obj.message.includes('\\')|| obj.message.includes('&')|| obj.message.includes('\'')|| obj.message.includes('"')){
        throw new Error('Invalid request header: Invalid Message')
    }

    return obj
}

console.log(solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '

    }
))