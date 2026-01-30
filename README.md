# Movie Collection
This is a web app that displays a movie collection and allows users to search and filter through the entries.

## Project Setup
- Clone the repository.
- Run `npx serve` in your terminal if you have node installed.
- You can also run with VS Code extensions like Live Server.

## CLI Commands Used
```
mkdir
cd
touch
git checkout -b <branchName>
git switch <branchname>
git pull origin <branchname>
git add .
git commit -m "descriptive commit message"
git push origin <branchname>

```

## Git Workflow Steps
- Switch to development branch
- Pull from the remote development branch to get latest changes on local.
- Checkout to a new feature branch for each feature.
- Commit changes regularly.
- When done, push the feature branch to the project repository.
- Raise a PR to the development branch with the feature description and request a review.
- Implement any changes requested in the review.
- Push changes and request another review.
- Once approved by the reviewer, the PR is merged.
- Pull changes from the remote development branch to local.
- Branch out for a new feature.


## Feature list and Implementation Details
- Grid display for movie collection
- Each entry movie has a title, release year, genre, movie poster and description.
- Filter movies by genre.
- Search movies by name.

## Team Member Contributions
@ramyilcodes:
- Create HTML Structure
- Add basic styles
- Setup movie Data Structure
- Documentation

@Yourgotopyromaniac:
- 

## Lessons Learned From Collaboration
- Forking isn't necessary when both people are collaborators on the project. Clone to maintain authorship during cherrypicking.
- Github defaults the base branch for a PR to the `main` branch, so it's important to change this to the required development or base branch when raising a PR.
- Pull from the remote base branch before pushing changes, to integrate any changes that could've occured during development.
- Learned to view the git workflow with VS Code source control timeline graph.