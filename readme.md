# Inspre Website (Single Page Website)

## About

A single-page website project for a company.

## Project Structure

### Dependencies

+ SASS (I guess)
    - CSS is done via SASS/.scss
+ Bootstrap (SASS) (customised)
    - The grid system. (primary reason)
    - Navbar, especially for the mobile view transition/button/setup. (secondary reason)
    - Out of the box styling. (third, and least important, reason)

***Note:***   
Susy and Compass-breakpoint are included, but not currently used.  
They were intended to replace usage of Bootstrap.

### Notable files

+ designSpec.jpg
    - A jpg of what the website should look like. A kind of spec.
+ /bower_components/bootstrap-sass/assets/stylesheets/_bootstrap-custom.scss
    - Edit this file to enable/disable bootstrap features/components. Annoyingly it has to sit in that location because the inner imports are relative to its position ...and we're too lazy to edit every single line.. :/ .
+ _bootstrap-variables-custom.scss
    - We basically overwrite bootstrap's with a copy of our own, customised, version.

***NOTE:*** The Bootstrap file handling could've been done MUCH better, but it's done now. Live and learn.

### ***Source Control Note***

As noted in the .gitignore file, the 'philosophy' here is:
+ DO add dependencies (i.e. Bootstrap; basically what we get via Bower).
+ DO NOT add tools themselves (i.e. no node_modules/ directory, even though we use gulp).
    - BUT, DO add project-specific tool files/configs.  
   (i.e. gulpfile.js; basically, for those using the same common tools.  
   The idea may be obvious, but simply put, we try to NOT DEPEND on a tool for the project to work.  
   BUT, we are actually using tools, so we want to make it easier for people with the same tools/setup to join in.)
    
### Build/Workflow

We mainly depend on Bower the most. But the other tools aren't necessary, as long as we follow the workflow (basically using the folder setup).

#### Workflow

There is just the SASS/CSS in regard to workflow to follow.  
The 'sass' folder is what we work from to work with CSS. It holds all of our custom styling we are working with. The .scss in the folder just gets compiled to CSS, and that file goes to 'compiledcss'.  
The 'compiledcss' is a buffer area, for the compiled CSS file when you compile the .scss files in the 'sass' directory. The file in here then gets treated further, such as via autoprefixer and minimization, output of which goes into the 'css' folder.  
The 'css' folder holds the final css file that is ready to be used on the site. It is the css file in here that is linked in the HMTL.

***TL;DR*** The CSS workflow is:   
[sass] ---compile to css--> [compiledcss] ---polish---> [css]

#### Tools

+ Bower
    - Used for what it does; manages the website's dependencies, such as Bootstrap.
+ Gulp (Gulp's dependencies can be seen in the package.json)
    - We use it as a build system (i.e. SASS/.scss to CSS), just run 'default'.  
   Gulp, as the build system, does have dependencies of its own. I.e. gulp-sass compiles sass to css; postcss for autoprefixer; autoprefixer for automated -webkit, etc. nonesense.