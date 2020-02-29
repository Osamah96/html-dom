import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Create new element

~~~ javascript
const ele = document.createElement('div');
~~~

## Create new text node

~~~ javascript
const ele = document.createTextNode('Hello World!');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'copy-text-to-the-clipboard',
        'download-a-file',
        'measure-the-width-of-given-text-of-given-font',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
    ]}
/>
</>
    );
};
