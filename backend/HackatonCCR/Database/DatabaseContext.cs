using System;
using HackatonCCR.Models;
using Microsoft.EntityFrameworkCore;

namespace HackatonCCR.Database
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Place> Places { get; set; }
        public DbSet<Plans> Plans { get; set; }
        public DbSet<User> User { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options) => options.UseSqlite("Data Source=database.db");
    };
}
