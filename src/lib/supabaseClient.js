import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://bmtbxmqzxhbvjmzxxfzf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdGJ4bXF6eGhidmptenh4ZnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzODY4MDUsImV4cCI6MjAzNDk2MjgwNX0.D5NifGIPbJgJIkrPM2JzttxxnQe3TbJPXZGjezl02v0')