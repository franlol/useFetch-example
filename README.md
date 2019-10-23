# useFetch - React custom hook

Hook to fetch data with [fetchAPI](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Also can handle errors and loading state.

## Why useFetch?

With this hook you can get the following vars in your functional components:
- Fetched data.
- Loading boolean.
- Error data.

## Usage

Just install:

```console
npm install usefetch
```

And import the hook.

```javascript
import useFetch from './useFetch';
```

Use it in your component:

```javascript
const yourComponent = props => {
	...
	const data = useFetch('url', options);
  ...
}
```

Optional, you can send personal settings as second parameter:


```javascript
const headers = new Headers();

const options = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default',
    ...more
};
```

## Full Example

```javascript
export default () => {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon', {});

  const getData = () => {
    if (error.status) return <li><p>Error: {error.message}</p></li>;
    if (loading) return <li><p>Loading...</p></li>;
    if (data.results) return data.results.map((poke, i) => <li key={`poke-${i}`}><p>{poke.name}</p></li>);
  }

  return (
    <div>
      <h1>Test</h1>
      <ul>
        {getData()}
      </ul>
    </div>
  );

}
```
