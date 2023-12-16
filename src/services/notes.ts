

export const createNewNote = (data: any) =>{

    const existingNotes: any = JSON.parse(localStorage.getItem('notes') as any) || []
    const newNoteID = existingNotes?.length + 1
    console.log(newNoteID)
    const newNote = {
        ...data,
        id: newNoteID,
    }
    existingNotes.splice(0, 0, newNote)

    localStorage.setItem('notes', JSON.stringify(existingNotes))

}   

export const editNote = (data: any) =>{

    const { id } = data
    if(!id) return
    const existingNotes: any = JSON.parse(localStorage.getItem('notes') as any)
    const noteIndex = existingNotes.indexOf()
    existingNotes[noteIndex] = data

    localStorage.setItem('notes', JSON.stringify(existingNotes))

    return true

}