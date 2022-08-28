# Regex.ua

### A place where popular regular expressions are collected.

Often, users have to search for regular expressions all over the Internet.
It's time to put an end to this and collect all the necessary tools in one place.

Here are the most commonly used regular expressions.

The project is completely open for improvement.


## How can I contribute?

If you would like to contribute, please create a **[Pull Request](https://github.com/Orestli/regex/pulls)** with the following template:

```json
{
  "title": "Title",
  "description": "Description",
  "pattern": "Regular expression",
  "placeholder": "Placeholder",
  "tags": "string,number,date,email",
  "priority": 1
}
```
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Name</th>
        <th style="width: 50px;">Type</th>
        <th style="width: 50px;">Required</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Title</td>
      <td>String</td>
      <td>Yes</td>
      <td>The name of your regular expression</td>
    </tr>
    <tr>
      <td>Description</td>
      <td>String</td>
      <td>Yes</td>
      <td>Description of your regular expression</td>
    </tr>
    <tr>
      <td>Pattern</td>
      <td>String</td>
      <td>Yes</td>
      <td>Regular expression</td>
    </tr>
    <tr>
      <td>Placeholder</td>
      <td>String</td>
      <td>Yes</td>
      <td>The text that will be displayed in the placeholder</td>
    </tr>
    <tr>
      <td>Tags</td>
      <td>String</td>
      <td>Optional</td>
      <td>Tags of your regular expression (separate with commas). Used for search</td>
    </tr>
    </tbody>
</table>

## I found a bug, what should I do?

Create an [issue](https://github.com/Orestli/regex/issues) and describe it in detail.

## Licence

MIT License
