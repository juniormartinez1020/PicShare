import { TablesInsert } from "@/types/database.types"
import { supabase } from "../lib/supabase"

export async function getEvents() {
    const { data } = await supabase
      .from('events')
      .select('*')
      .throwOnError()

      return data
}

export async function getEvent(id: string) {
    const { data } = await supabase
      .from('events')
      .select('*, assets(*)')
      .eq("id", id)
      .throwOnError()
      .single()

      return data
}


export async function createEvent(newEvent: TablesInsert<'events'>) {
  const { data } = await supabase
    .from('events')
    .insert(newEvent)
    .select()
    .single()
    .throwOnError()

    
    return data
}