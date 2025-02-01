# IEEE Magic 4.0 Photo Booth Backend

### Exmaple image upload using curl
```bash
curl -X POST http://backend-url/upload \
  -H "Content-Type: multipart/form-data" \
  -F "image=@04.png"
```

### Upload Response
```json
{
    "message":"File uploaded successfully",
    "imageUrl":"https://SUPABASE_SUBDOMAIN.supabase.co/storage/v1/object/public/BUCKET_NAME/1738388384533_04.png"
}
```