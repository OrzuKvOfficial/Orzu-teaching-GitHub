mevalar = ["olma", "banan", "nok", "anor"]

# Ro'yxatni chiqarish
print("Birinchi meva:", mevalar[0])

# Kameraga ulanish
cap = cv2.VideoCapture(0)

# Cheksiz tsikl
while True:
    # Kamerani o'qish
    ret, frame = cap.read()

    # O'qilgan kadrlarni ko'rsatish
    cv2.imshow('Kamera', frame)

    # Ekrandagi 'q' tugmasi bosilganda tsiklni to'xtatish
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Qisqa bo'lish
cap.release()
cv2.destroyAllWindows()
