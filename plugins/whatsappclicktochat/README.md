# Whatsapp Click To Chat

Bu eklenti, JTL-Shop üzerinde tüm sayfalarda görüntülenen yüzen bir WhatsApp sohbet butonu ekler. Telefon numarası, varsayılan mesaj ve erişilebilirlik etiketi yönetim paneli üzerinden yapılandırılabilir.

## Kurulum

1. Eklentiyi JTL eklenti yöneticisinden yükleyin.
2. "Whatsapp Click To Chat" eklentisini etkinleştirin.
3. Ayarlar sekmesinde WhatsApp telefon numaranızı ülke kodu ile birlikte girin.
4. Dilerseniz varsayılan mesajı ve buton etiketini özelleştirin.

## Notlar

- Telefon numarası yalnızca rakamlardan oluşmalı ve ülke kodunu içermelidir.
- Varsayılan mesaj, sohbet açılırken otomatik olarak WhatsApp'a aktarılır.
- Erişilebilirlik etiketi, ekran okuyucular için butonun amacını açıklar.

## Paketleme

JTL eklenti yönetimine yüklemeden önce eklentiyi aşağıdaki komutla arşivleyebilirsiniz:

```bash
zip -r dist/whatsappclicktochat.zip plugins/whatsappclicktochat
```

`dist/` dizini `.gitignore` içinde yer aldığından, arşiv Git deposunda takip edilmez ve PR oluştururken "Binärdateien werden nicht unterstützt" hatasıyla karşılaşılmaz.
