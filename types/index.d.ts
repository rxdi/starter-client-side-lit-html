declare let packageJson: any;

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.css' {
  const value: string;
  export default value;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.scss' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}
