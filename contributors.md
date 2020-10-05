# css-components contribution guidelines😬

After cloning this repo open the project folder in a _text-editor_(vs code is preferable). If you don't have vs-code in your machine, [install it](https://code.visualstudio.com/download)

## Folder Structure

```
├───css
│   └───assets
├───favicon
├───images
├───js
└───pages

```

The **css** folder contains all the files for adding your `css` and the **pages** folder contains the `html` files for adding html code.

## Make necessary changes and commit those changes

Make changes based on what component you are adding. for example If you have a button component copy the below html code into button.html and add your component inside this html and write your css inside button.css file:

```html
<!--          (you can specify your name here)   -->
<div class="row">
  <div class="col-lg-6">
    <div class="component">
      <div class="card magictime">
        <!-- Here Philip is the css selector for changing card color-->
        <div class="card-title philip">
          <strong>Button</strong>
        </div>
        <div class="card-content">
          <!-- Add your html code for your component inside this. -->
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="component">
      <div class="card magictime">
        <!-- Here Philip is the css selector for changing card color-->
        <div class="card-title philip">
          <strong>Creator</strong>
        </div>
        <div class="card-content">
          <div class="creater-name">
            <h2>
              <b>Name:</b
              ><span>
                <!-- Add your name and github profile link.  -->
                <a href="profile link">your name </a>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

# Changing card color

You can change your card color by adding your name as a `selector`(in the above example `philip` is the selector). After adding your name as selector you can change its color by editing the file cardcolor.css like this:

```css
/* You can add your name  */
.your-name {
  background-color: #5f067b;
}
```

## commit these changes

If you go to the project directory and execute the command git status, you'll see there are changes.
Add those changes to the branch you just created using the `git add` command:

```
git add .
```

Now commit those changes using the `git commit` command:

```
git commit -m "Added new <Your component name>"
```

## Push changes to github

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.
Now submit the pull request.
Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

## Where to go from here?

Congrats!!🥳  
You just completed the standard fork -> clone -> edit -> pull request workflow that you'll encounter often as a contributor!
