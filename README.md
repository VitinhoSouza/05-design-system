# Welcome to **Design System** 🎨
- Design System is the fifth Ignite project and challenge in the React trail 2022.   
- It was developed following the **monorepo strategy**, where each package is a project dependent on the others.     
- Packages of **tokens**, components encoded in **react**, components **documentation** etc. were developed.
- Packages published in **npm**:
![npm - design system](https://user-images.githubusercontent.com/51724518/220119733-072bd2cc-cdc8-4162-aa8f-754b9165426c.png)

- Components docs published with **storybook**:
![Storybook - design system](https://user-images.githubusercontent.com/51724518/220119742-a4c7ca7b-b8ac-4027-8bef-53cef55e3db5.png)


## Techs:
- **stitches** for styling;
- **typescript** in data typing;
- **tsup** for bundle your typescript library with no config, powered by esbuild;
- **phosphor-react** for the use of icons;
- **storybook** for components documentation;
- **eslint** for code standardization;
- **turbo repo** for be able to run scripts on all packages at the same time and speed up build;
- **changesets** for helps control monorepo versioning within npm.

## Get started:
- With Git installed, in your terminal run the following command: `git clone https://github.com/VitinhoSouza/05-ignite-system.git`;
- Enter the project folder and do: `npm install`. When all packages are installed, do `npm run build` to start in development mode.
- After all the packages have been built, you can run `npm run dev` on the packages you want to modify, as well as other scripts that are present in the corresponding package.json.   
- Links to components docs published with **storybook** (https://vitinhosouza.github.io/05-design-system) and to packages published in **npm** (https://www.npmjs.com/search?q=%40ignite-ui-vitinho); 
