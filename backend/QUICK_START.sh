#!/bin/bash
# 🚀 SANAD Database - QUICK START
# Copier-coller cette ligne pour démarrer

# ==================== 3 COMMANDES POUR TOUT FAIRE ====================

# 1️⃣ Aller dans le dossier
cd "C:\Users\tasni\Desktop\PROJET SANAD\backend"

# 2️⃣ Lancer l'installation automatique
setup_database.bat              # Windows/XAMPP
# OU
bash setup_database.sh          # Linux/Mac

# 3️⃣ Vérifier que c'est fait
mysql -u root sanad -e "SELECT COUNT(*) as count FROM users;"
# Doit afficher: 6 ✅

# ==================== C'EST TOUT! ====================

# ✅ Base de données créée
# ✅ 6 utilisateurs insérés
# ✅ 3 organisations vérifiées
# ✅ 6 demandes d'aide
# ✅ 10 donations
# ✅ 4 campagnes
# ✅ Prêt pour XAMPP

# 🌐 Tester les API:
# http://localhost/sanad/backend/api/get_requests.php
# http://localhost/sanad/backend/api/get_associations.php

# 📚 Documentation complète dans:
# - PACKAGE_SUMMARY.md (résumé 5 minutes)
# - INDEX.md (navigation)
# - DATABASE_SETUP.md (guide détaillé)
