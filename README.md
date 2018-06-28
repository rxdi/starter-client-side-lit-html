# Powerful Dependency Injection inside Browser and Node using Typescript and RXJS 6
***
> The idea behind @rxdi is to create independent dependency injection that can be used everywhere.
> First steps where with platform called @gapi you can check repository [here](https://github.com/Stradivario/gapi).
> Then because of the needs of the platform i decided to develop this DI container helping me build progressive applications.
> Hope you like my journey and help and suggestions are appreciated!
Main repository [@rxdi/core](https://github.com/rxdi/core) 
***
### Installation and basic examples:

##### To start developing, run:

```bash
git clone https://github.com/rxdi/starter-client
```
##### Install modules:

```bash
npm install
```
##### Start App

```bash
parcel ./src/index.html --target browser
```

##### Build App
```bash
parcel build ./src/index.html --target browser
```

## Simplest app

src/main.ts
```typescript
import { Bootstrap } from '@rxdi/core';
import { AppModule } from './app/app.module';

Bootstrap(AppModule, {
    init: true,
    logger: {
        logging: true,
        date: true,
        hashes: true,
        exitHandler: true,
        fileService: true
    }
})
.subscribe(
    () => console.log('Started!'),
    (e) => console.error(e)
);
```

src/app/app.module.ts
```typescript
import { Module } from "@rxdi/core";
import { RenderService } from './render.service.ts';
import { ReactModule } from "./react/react.module";

@Module({
    imports: [ReactModule],
    services: [RenderService]
})
export class AppModule {}
```

src/app/react/react.module.ts
```typescript
import { Module } from "@rxdi/core";
import { ReactComponent } from "./components/react.component";

@Module({
    components: [ReactComponent]
})
export class ReactModule {}
```

src/app/react/components/react.component.tsx
```typescript

import * as React from "react";

import * as ReactDOM from "react-dom";
import { Component } from "@rxdi/core";

export interface HelloProps {
    compiler: string;
    framework: string;
    rxdi: string;
}

@Component()
export class ReactComponent extends React.Component<HelloProps, {}> {

    OnInit() {
        ReactDOM.render(
            <ReactComponent compiler="TypeScript" framework="React" rxdi="@rxdi" />,
            document.getElementById("example")
        );
    }

    render() {
        return <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.rxdi}!</h1>;
    }

}
```

Renderer service

src/app/common/services/renderer.ts
```typescript

import { Service } from "@rxdi/core";

export class NodeData {
    text: string;
    name: string;
    constructor(name) {
        this.name = name;
        this.text = null;
    }
}

@Service()
export class RendererService {
    constructor(

    ) {
        alert("My awesome app!");
        const NODE_DATA_KEY = '__ID_Data__';

        // The current nodes being processed
        let currentNode = null;
        let currentParent = null;

        function getData(node) {
            if (!node[NODE_DATA_KEY]) {
                node[NODE_DATA_KEY] = new NodeData(node.nodeName.toLowerCase());
            }

            return node[NODE_DATA_KEY];
        }

        function enterNode() {
            currentParent = currentNode;
            currentNode = null;
        }

        function nextNode() {
            currentNode = currentNode ? currentNode.nextSibling : currentParent.firstChild;
        }

        function exitNode() {
            currentNode = currentParent;
            currentParent = currentParent.parentNode;
        }

        const matches = function (matchNode, name/*, key */) {
            const data = getData(matchNode);
            return name === data.name // && key === data.key;
        };

        function renderDOM(name) {
            if (currentNode && matches(currentNode, name/*, key */)) {
                return currentNode;
            }

            const node = name === '#text' ?
                document.createTextNode('') :
                document.createElement(name);

            currentParent.insertBefore(node, currentNode);

            currentNode = node;

            return node;
        }

        function elementOpen(name) {
            nextNode();
            const node = renderDOM(name);
            enterNode();

            // check for updates, i.t attributes
            const data = getData(node);
            return currentParent;
        }

        function elementClose(node) {
            exitNode();

            return currentNode;
        }

        function text(value) {
            nextNode();
            const node = renderDOM('#text');

            // checks for text updates
            const data = getData(node);

            if (data.text !== value) {
                data.text = (value);
                node.data = value;
            }

            return currentNode;
        }


        function patch(node, fn, data) {
            currentNode = node;

            enterNode();
            fn(data);
            exitNode();
        };


        function render(data) {
            elementOpen('h1');
            {
                text('Hello, ' + data.user)
            }
            elementClose('h1');
            elementOpen('ul')
            {
                elementOpen('li');
                {
                    text('Counter: ')
                    elementOpen('span');
                    {
                        text(data.counter);
                    }
                    elementClose('span');
                }
                elementClose('li');
            }

            elementClose('ul');
        }


        document.querySelector('button').addEventListener('click', () => {
            data.counter++;
            patch(document.body, render, data);
        });
        document.querySelector('input').addEventListener('input', (e) => {
            data.user = e.target['value'];
            patch(document.body, render, data);
        });

        const data = {
            user: 'Alexey',
            counter: 1
        };

        patch(document.body, render, data);
    }
}

```