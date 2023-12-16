

export const createNewNote = (data: any) =>{

    const existingNotes: any = JSON.parse(localStorage.getItem('notes') as any) || []
    const newNoteID = (existingNotes?.length + 1).toString()
    console.log(newNoteID)
    const newNote = {
        ...data,
        id: newNoteID,
    }
    existingNotes.splice(0, 0, newNote)

    localStorage.setItem('notes', JSON.stringify(existingNotes))
    return true

}   

export const editNote = (data: any) =>{

    const { id } = data
    if(!id) return false
    const existingNotes: any = JSON.parse(localStorage.getItem('notes') as any)
    const noteIndex = existingNotes.findIndex((el: any) => el.id === id)
    existingNotes[noteIndex] = data

    localStorage.setItem('notes', JSON.stringify(existingNotes))

    return true

}

export const getAllNotes = () =>{

    const allNotes = localStorage.getItem('notes')
    return allNotes ? JSON.parse(allNotes) : []
}

export const deleteNote = (id: string) =>{
    
    if(!id) return false

    const existingNotes: any = JSON.parse(localStorage.getItem('notes') as any) || []
    const noteIndex = existingNotes.findIndex((el: any) => el.id === id)
    existingNotes.splice(noteIndex, 1)
    JSON.stringify(localStorage.setItem('notes', JSON.stringify(existingNotes)))
    return true
    
}   