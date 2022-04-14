import packageJSON from '../package.json';

console.log('[STARTER]: Created by', packageJSON.author);
console.log('[STARTER]: Version', packageJSON.version);
console.log('[STARTER]: Dependencies: ');
console.table(packageJSON.dependencies);
console.log('[STARTER]: Dev Dependencies: ');
console.table(packageJSON.devDependencies);
