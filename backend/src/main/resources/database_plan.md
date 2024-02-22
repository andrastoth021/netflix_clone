## DB Tables

### User
- id
- uuid
- username
- email
- hashed password
- isAdmin
- ? list of: favorites/liked shows
- OPTIONAL: subscription type (for authorization)



__\*__ common join table with both tables ids (example: category - show join)
### Show
- id
- uuid
- title
- original_title
- short_description (for hover)
- description
- release date (year.  month & day?)
- pegi (foreign key)
- runtime (seconds)
- ? country
- poster (src)
- list of: categories*
- list of: tags*
- list of: creators*
- list of: actors*
- list of: episodes
- isSeries (is it a series or a movie)


### Category - Show join
- id
- category_id
- show_id


? **Season**
id, show_id, uuid, description, image (src)


### Episodes
- id
- show_id
- uuid
- URL (src)
- season
- episode_number
- title
- original_title
- description
- runtime


### Categories, Tags
- id
- ? uuid
- name
  (default categories: Action, Adventure, Animation, Comedy, Crime, Drama, Fantasy, Horror, Mystery, Romance, Sci-Fi, Thriller)
  (default tags: -)


### Actors, Creators
- id
- uuid
- name
- Optionals: image (src), description, birth, etc...


### PEGI
- id
- age
  (can be modified in admin panel. deafult datas: 0, 3, 7, 12, 16, 18)
