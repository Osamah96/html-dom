import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Setting the style via the \`style\` property:

~~~ javascript
ele.style.backgroundColor = 'red';
ele.style['backgroundColor'] = 'red';
ele.style['background-color'] = 'red';
~~~

Multiple styles can be set at the same time by overwriting or updating the \`cssText\` property:

~~~ javascript
// Add new style
el.style.cssText += 'background-color: red; color: white';

// Ignore previous styles
el.style.cssText = 'background-color: red; color: white';
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-css-styles-of-an-element',
        'measure-the-width-of-given-text-of-given-font',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
        'show-or-hide-an-element',
        'toggle-an-element',
    ]}
/>
</>
    );
};
