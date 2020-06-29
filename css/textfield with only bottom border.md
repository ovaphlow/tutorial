# textfield with only bottom border

## html

```html
<div>
    <label className="form-label">NAME</label>
    <input type="text" placeholder="1123" class="input-underscore" />
</div>
```

## css

```css
.input-underscore {
    color: rgba(255, 255, 255, 1);
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid silver /* slategrey */;
    border-radius: 0px;
    background-color: transparent;
}
```
