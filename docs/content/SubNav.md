---
title: SubNav
status: Alpha
---

Use the SubNav component for navigation on a dashboard-type interface with another set of navigation components above it. This helps distinguish navigation hierarchy.

To use SubNav with [react-router](https://github.com/ReactTraining/react-router) or
[react-router-dom](https://www.npmjs.com/package/react-router-dom), pass
`as={NavLink}` and omit the `selected` prop.
This ensures that the NavLink gets `activeClassName='selected'`

**Attention:** Make sure to properly label your `SubNav` with an `aria-label` to provide context about the type of navigation contained in `SubNav`.

## Default example

```jsx live
<SubNav aria-label="Main">
  <SubNav.Links>
    <SubNav.Link href="#home" selected>
      Home
    </SubNav.Link>
    <SubNav.Link href="#documentation">Documentation</SubNav.Link>
    <SubNav.Link href="#support">Support</SubNav.Link>
  </SubNav.Links>
</SubNav>
```

## SubNav with search example

```jsx live
<SubNav aria-label="Main">
  <SubNav.Links>
    <SubNav.Link href="#home" selected>
      Home
    </SubNav.Link>
    <SubNav.Link href="#documentation">Documentation</SubNav.Link>
    <SubNav.Link href="#support">Support</SubNav.Link>
  </SubNav.Links>

  <TextInput type="search" icon={SearchIcon} sx={{width: 320}} />
</SubNav>
```

## SubNav with filtered search example

```jsx live
<SubNav aria-label="Main">
  <FilteredSearch>
    <Dropdown>
      <Dropdown.Button>Filter</Dropdown.Button>
      <Dropdown.Menu direction="sw">
        <Dropdown.Item>
          <a href="#">Item 1</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="#">Item 2</a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a href="#">Item 3</a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <TextInput type="search" icon={SearchIcon} width={320} />
  </FilteredSearch>
  <SubNav.Links>
    <SubNav.Link href="#home" selected>
      Home
    </SubNav.Link>
    <SubNav.Link href="#documentation">Documentation</SubNav.Link>
    <SubNav.Link href="#support">Support</SubNav.Link>
  </SubNav.Links>
</SubNav>
```

## Component props

### SubNav

| Name       | Type              | Default | Description                                                                            |
| :--------- | :---------------- | :-----: | :------------------------------------------------------------------------------------- |
| actions    | Node              |         | Place another element, such as a button, to the opposite side of the navigation items. |
| align      | String            |         | Use `right` to have navigation items aligned right.                                    |
| full       | Boolean           |         | Used to make navigation fill the width of the container.                               |
| aria-label | String            |         | Used to set the `aria-label` on the top level `<nav>` element.                         |
| sx         | SystemStyleObject |   {}    | Style to be applied to the component                                                   |

### SubNav.Link

| Name     | Type              | Default | Description                                      |
| :------- | :---------------- | :-----: | :----------------------------------------------- |
| as       | String            |         | sets the HTML tag for the component              |
| href     | String            |         | URL to be used for the Link                      |
| selected | Boolean           |         | Used to style the link as selected or unselected |
| sx       | SystemStyleObject |   {}    | Style to be applied to the component             |

### SubNav.Links

| Name | Type              | Default | Description                          |
| :--- | :---------------- | :-----: | :----------------------------------- |
| sx   | SystemStyleObject |   {}    | Style to be applied to the component |
