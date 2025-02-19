---
title: UnderlineNav
status: Alpha
---

Use the UnderlineNav component to style navigation with a minimal underlined selected state, typically used for navigation placed at the top of the page.

To use UnderlineNav with [react-router](https://github.com/ReactTraining/react-router) or
[react-router-dom](https://www.npmjs.com/package/react-router-dom), pass
`as={NavLink}` and omit the `selected` prop.
This ensures that the NavLink gets `activeClassName='selected'`

**Attention:** Make sure to properly label your `UnderlineNav` with an `aria-label` to provide context about the type of navigation contained in `UnderlineNav`.

## Default example

```jsx live
<UnderlineNav aria-label="Main">
  <UnderlineNav.Link href="#home" selected>
    Home
  </UnderlineNav.Link>
  <UnderlineNav.Link href="#documentation">Documentation</UnderlineNav.Link>
  <UnderlineNav.Link href="#support">Support</UnderlineNav.Link>
</UnderlineNav>
```

## Component props

### UnderlineNav

| Name       | Type              | Default | Description                                                                            |
| :--------- | :---------------- | :-----: | :------------------------------------------------------------------------------------- |
| actions    | Node              |         | Place another element, such as a button, to the opposite side of the navigation items. |
| align      | String            |         | Use `right` to have navigation items aligned right.                                    |
| full       | Boolean           |         | Used to make navigation fill the width of the container.                               |
| aria-label | String            |         | Used to set the `aria-label` on the top level `<nav>` element.                         |
| sx         | SystemStyleObject |   {}    | Style to be applied to the component                                                   |

### UnderlineNav.Link

| Name     | Type              | Default | Description                                      |
| :------- | :---------------- | :-----: | :----------------------------------------------- |
| as       | String            |         | sets the HTML tag for the component              |
| href     | String            |         | URL to be used for the Link                      |
| selected | Boolean           |         | Used to style the link as selected or unselected |
| sx       | SystemStyleObject |   {}    | Style to be applied to the component             |
