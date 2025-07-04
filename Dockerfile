# Gunakan image nginx ringan
FROM nginx:alpine

# Hapus konten default nginx
RUN rm -rf /usr/share/nginx/html/*

# Salin semua file ke folder html nginx
COPY . /usr/share/nginx/html

# Expose port 80 untuk akses web
EXPOSE 80
