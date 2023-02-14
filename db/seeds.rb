# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

blogs = [
  {
    id: 1,
    title: "Library",
    author: "Addisu",
    content: "lorem ipsum dolor sit amet, consectetur adip"
  },
  {
    id: 2,
    title: "Library", 
    author: "Addisu",
     content: "lorem ipsum dolor sit amet, consectetur adip"
    }
  ]

  blogs.each do |bg|
    Blog.create(title: bg[title], author: bg[author], content: bg[content])
  end