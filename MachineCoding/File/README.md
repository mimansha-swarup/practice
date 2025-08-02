# File System
interface FileSystem{
  type: "FILE" |"FOLDER",
  name: string,
  createdAt: "string",
}

- user can create a file and folder inside  folder
- file or folder can't be created inside folder
- if there is any subFiles  we need to re-render 
- user can rename file or folder
