# Clipboard

Super simple, completely configurable, copy to clipboard.

## Installation

1. Add the JavaScript before the `</body>` (required)

```html
<script src="clipboard.js"></script>
```

or via jsDeliver:

```html
<script src="https://cdn.jsdelivr.net/gh/signified/clipboard/clipboard.min.js"></script>
```

2. Add the stylesheet in the `<head>` (optional)

```html
<link rel="stylesheet" href="clipboard.css">
```

or via jsDeliver:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/signified/clipboard/clipboard.min.css">
```

**Note:** The supplied stylesheet applies default positioning and basic styling rules. Feel free to use it as a starting point or, if you're using a framework like Bootstrap or Tailwind CSS, make use of the `options` to take full advantage of the component and utility classes these frameworks provide.

## Usage

```javascript
clipboard(selectors, options, callback(clipboard, element));
```

### `selectors` (required)

A DOMString containing one or more selectors to match against.

### `options` (optional)

An object representing configuration options.

```javascript
{
  // The position of the `template` relative to the selected `element`.
  // Possible values are:
  // 'beforebegin': Before the `element` (default).
  // 'afterbegin': Inside the `element`, before its first child.
  // 'beforeend': Inside the `element`, after its last child.
  // 'afterend': After the `element`.
  position: 'beforebegin'
  // The HTML to use when creating the clipboard.
  template: '<div class="clipboard"><button class="clipboard-button" type="button">Copy</button></div>'
}
```

### `callback` (optional)

A callback function with parameters representing the `clipboard` and the selected `element` for each `selectors`.

### Examples

See the below examples in action here: https://signified.github.io/clipboard.

Add a clipboard button to every `<pre>...</pre>` with default styling:

```javascript
clipboard('pre');
```

## Contributing

See [Contributing](https://github.com/signified/.github/blob/master/CONTRIBUTING.md).

## Credits

See [Contributors](https://github.com/signified/clipboard/graphs/contributors).

## License

See [LICENSE](LICENSE).
