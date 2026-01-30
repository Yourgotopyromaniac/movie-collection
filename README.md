# Movie Collection Web App

This is a simple web application that displays a movie collection and allows users to search and filter through the entries.

---

## Project Setup

Follow these steps to run the project locally.

### Prerequisites

- Git
- Node.js (optional, for serve)
- VS Code (optional, for Live Server)

### Steps

1. Clone the repository:

   `git clone https://github.com/Yourgotopyromaniac/movie-collection`

2. Open a CLI in the root of the project
3. Serve the project using one of the options below.

#### Option 1: Using Node.js

npx serve

#### Option 2: Using VS Code

- Install the Live Server extension
- Right-click index.html
- Select Open with Live Server

#### Option 3: Using VS Code Run and Debug

1. Open the project folder in VS Code.
2. Go to the **Run and Debug** panel (Ctrl + Shift + D).
3. Click **Run > Start Debugging**.
4. Select a browser environment (for example: Chrome or Edge).
5. VS Code will launch the app in your browser with debugging enabled.

---

## CLI Commands Used

| Command                  | Purpose                           | Example                                            |
| ------------------------ | --------------------------------- | -------------------------------------------------- |
| mkdir                    | Create a new directory            | mkdir movie-collection                             |
| cd                       | Change directory                  | cd movie-collection                                |
| touch                    | Create a new file                 | touch index.html                                   |
| git checkout -b <branch> | Create and switch to a new branch | git checkout -b feature/documentation              |
| git switch <branch>      | Switch to an existing branch      | git switch development                             |
| git pull origin <branch> | Fetch and merge remote updates    | git pull origin development                        |
| git add .                | Stage all changes                 | git add .                                          |
| git add                  | Stage specific changes            | git add index.html                                 |
| git commit -m "message"  | Commit changes with a message     | git commit -m "docs: updated readme documentation" |
| git push origin <branch> | Push branch to remote             | git push origin feature/documentation              |

---

## Git Workflow (Collaborative Responsibilities)

| Collaborator 1 (Feature Developer) | Collaborator 2 (Reviewer)              |
| ---------------------------------- | -------------------------------------- |
| Switch to the development branch   |                                        |
| Pull latest changes from remote    |                                        |
| Create a new feature branch        |                                        |
| Implement the assigned feature     |                                        |
| Commit changes regularly           |                                        |
| Push feature branch to repository  |                                        |
| Open a Pull Request to development |                                        |
|                                    | Review submitted Pull Request          |
|                                    | Provide feedback and requested changes |
| Apply requested review changes     |                                        |
| Push updated changes               |                                        |
|                                    | Approve Pull Request                   |
|                                    | Merge approved Pull Request            |
| Pull updated development branch    |                                        |
| Prepare for next feature task      |                                        |

---

## Features and Implementation Details

| Feature        | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| Grid Display   | Movies are displayed in a grid layout                           |
| Movie Metadata | Each movie includes title, year, genre, poster, and description |
| Genre Filter   | Users can filter movies by genre                                |
| Search         | Users can search movies by title                                |

---

## Team Member Contributions

| Team Member         | Contributions                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| @ramyilcodes        | Created HTML structure, added base styles, set up movie data, documentation                                          |
| @Yourgotopyromaniac | Updated HTML Structure and styling, implemented movie card JavaScript rendering and filtering, updated documentation |

---

## Lessons Learned From Collaboration

- Forking is unnecessary when all contributors are collaborators.
- Cloning the main repository preserves commit authorship.
- Github defaults the base branch for a PR to the `main` branch, so it's important to change this to the required development or base branch when raising a PR.
- Pull from the remote base branch before pushing changes, to integrate any changes that could've occured during development.
- Learned to view the git workflow with VS Code source control timeline graph.
- Learned not to mixup checkout and switch git commands, and subsequently learnt how to delete a branch with git
